import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Building2,
  LifeBuoy,
  Users,
  Globe,
} from 'lucide-react';
import { contactConfig } from '@/config/contact';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/cards/GlassCard';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata = {
  title: 'Contact Us & Global Offices',
  description: 'Get in touch with IntelliForceAI engineering, enterprise sales, customer support, and global office locations in SF, Boston, and London.',
};

const deptIconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="h-5 w-5 text-cyan-400" />,
  LifeBuoy: <LifeBuoy className="h-5 w-5 text-emerald-400" />,
  Users: <Users className="h-5 w-5 text-purple-400" />,
  Mail: <Mail className="h-5 w-5 text-amber-400" />,
};

export default function ContactPage() {
  return (
    <main className="w-full pt-8 pb-16 space-y-16">
      {/* Hero Header */}
      <Section spacing="sm">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <Badge variant="primary" icon={<Sparkles className="h-3 w-3" />}>
              {contactConfig.badge}
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
              {contactConfig.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {contactConfig.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Department Cards Grid */}
      <Section spacing="sm" className="w-full">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactConfig.departments.map((dept, dIdx) => {
              const icon = deptIconMap[dept.iconName] || <Mail className="h-5 w-5 text-primary" />;
              return (
                <GlassCard
                  key={dIdx}
                  intensity="medium"
                  className="p-6 space-y-3 hover:border-primary/40 hover:shadow-glow transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    {icon}
                  </div>
                  <h3 className="text-base font-bold text-foreground">{dept.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {dept.description}
                  </p>
                  <div className="pt-2 flex flex-col gap-1 text-xs font-mono">
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-cyan-400 hover:underline font-bold"
                    >
                      {dept.email}
                    </a>
                    <span className="text-muted-foreground">{dept.phone}</span>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Form & Offices Main Section */}
      <Section spacing="lg" className="w-full">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form Side */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Offices & Business Hours Side */}
            <div className="lg:col-span-5 space-y-8">
              {/* Business Hours Banner */}
              <GlassCard intensity="medium" className="p-6 space-y-3 border-cyan-500/30">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Clock className="h-5 w-5" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">Business Hours & SLAs</h3>
                </div>
                <p className="text-xs font-mono font-semibold text-foreground">
                  {contactConfig.businessHours}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {contactConfig.timezone}
                </p>
              </GlassCard>

              {/* Office Locations */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Global Offices</h3>
                </div>

                <div className="space-y-4">
                  {contactConfig.offices.map((office) => (
                    <GlassCard
                      key={office.id}
                      intensity="low"
                      className="p-5 space-y-2 hover:border-primary/40 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-foreground">
                          {office.city} ({office.name})
                        </h4>
                        {office.isHeadquarters && (
                          <Badge variant="accent" size="sm">
                            HQ
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-start gap-2 text-xs text-muted-foreground">
                        <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{office.address}</span>
                      </div>

                      <div className="flex items-center gap-4 text-xs font-mono pt-1 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Phone className="h-3.5 w-3.5 text-emerald-400" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Mail className="h-3.5 w-3.5 text-blue-400" />
                          <span>{office.email}</span>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Interactive Map Frame Section */}
      <Section spacing="lg" className="w-full bg-background/50 border-t border-border/30">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center space-y-3 mb-8">
            <Badge variant="accent" icon={<MapPin className="h-3 w-3" />}>
              San Francisco HQ Location
            </Badge>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl text-foreground">
              Visit Our Global Headquarters
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-muted/60 aspect-video max-w-5xl mx-auto shadow-glow">
            <iframe
              title="San Francisco HQ Map"
              src={contactConfig.offices[0].mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
