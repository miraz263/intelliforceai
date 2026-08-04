export type BlogCategory =
  | 'AI Engineering'
  | 'Research'
  | 'Cybersecurity'
  | 'Cloud Infrastructure'
  | 'Product Updates';

export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface TOCHeading {
  id: string;
  text: string;
  level: number;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  readingTime: string;
  category: BlogCategory;
  tags: string[];
  author: BlogAuthor;
  featured?: boolean;
  tableOfContents: TOCHeading[];
}

export const blogCategories: BlogCategory[] = [
  'AI Engineering',
  'Research',
  'Cybersecurity',
  'Cloud Infrastructure',
  'Product Updates',
];

export const blogPostsData: BlogPostItem[] = [
  {
    id: 'post-1',
    slug: 'architecting-multi-agent-swarms-in-rust',
    title: 'Architecting High-Throughput Multi-Agent Swarms in Rust & CUDA',
    excerpt:
      'How we engineered IntelliForceAI 2.0 to orchestrate 10,000+ parallel agent reasoning threads with sub-millisecond inter-agent IPC latency.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    date: 'July 28, 2026',
    readingTime: '6 min read',
    category: 'AI Engineering',
    tags: ['Rust', 'CUDA', 'Multi-Agent', 'High-Performance'],
    author: {
      name: 'Dr. Alexander Vance',
      role: 'Chief Executive Officer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    },
    featured: true,
    tableOfContents: [
      { id: 'introduction', text: '1. Introduction to Autonomous Swarms', level: 2 },
      { id: 'ipc-latency', text: '2. Solving Inter-Agent IPC Overhead', level: 2 },
      { id: 'rust-cuda-pipeline', text: '3. The Rust & CUDA Acceleration Pipeline', level: 2 },
      { id: 'benchmarks', text: '4. Benchmark Results & Enterprise Impact', level: 2 },
    ],
    content: `
## Introduction to Autonomous Swarms

Building autonomous AI software requires moving beyond single-prompt completion loops toward **self-governing multi-agent networks**. When thousands of micro-agents execute concurrent reasoning steps, traditional Python runtime overhead quickly becomes the primary system bottleneck.

At IntelliForceAI, we re-architected our core execution engine in pure Rust with direct CUDA kernel bindings.

## Solving Inter-Agent IPC Overhead

Traditional agentic setups communicate over HTTP REST or JSON-RPC, introducing **20ms to 100ms** per message hop. In complex multi-step workflows with 50+ agent interactions, latency compounds exponentially.

We designed a zero-copy shared memory lock-free channel:

\`\`\`rust
// Zero-copy shared ring buffer channel for sub-millisecond IPC
pub struct AgentRingBuffer<T, const N: usize> {
    buffer: [UnsafeCell<MaybeUninit<T>>; N],
    head: AtomicUsize,
    tail: AtomicUsize,
}
\`\`\`

By bypassing operating system context switches, inter-agent communication latency dropped to **< 0.4ms per message hop**.

## The Rust & CUDA Acceleration Pipeline

To execute tensor operations and token generation directly alongside control flow logic, we compile custom CUDA kernels embedded inside Rust binary crates.

\`\`\`cuda
__global__ void FastKernelAttention(const float* __restrict__ Q, const float* __restrict__ K, float* __restrict__ Out) {
    int idx = blockIdx.x * blockDim.x + threadIdx.x;
    // Accelerated parallel attention reduction
}
\`\`\`

## Benchmark Results & Enterprise Impact

- **10,000 Concurrent Agents**: Executed simultaneously on a single 8-GPU cluster node.
- **85% Processing Speedup**: Compared to standard Python asyncio orchestration frameworks.
- **Zero Memory Spikes**: Strict Rust ownership rules guarantee memory safety and zero garbage collection pauses.
    `,
  },
  {
    id: 'post-2',
    slug: 'zero-server-nextjs-static-export-cpanel',
    title: 'Deploying High-Performance Next.js 15 Static Exports to Shared cPanel Hosting',
    excerpt:
      'Learn how to build and optimize 100% static Next.js App Router websites that run blazingly fast on standard shared cPanel hosting without Node servers.',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    date: 'July 15, 2026',
    readingTime: '5 min read',
    category: 'Cloud Infrastructure',
    tags: ['Next.js', 'Static Export', 'cPanel', 'Performance'],
    author: {
      name: 'David Chen',
      role: 'VP of Infrastructure',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
    },
    featured: true,
    tableOfContents: [
      { id: 'why-static-export', text: '1. Why Static Export for Enterprise', level: 2 },
      { id: 'next-config-setup', text: '2. Configuring next.config.ts for Export', level: 2 },
      { id: 'handling-dynamic-routes', text: '3. Handling Dynamic Routes via generateStaticParams', level: 2 },
      { id: 'cpanel-deployment', text: '4. Uploading to public_html', level: 2 },
    ],
    content: `
## Why Static Export for Enterprise

Many modern web apps suffer from unnecessary server maintenance, expensive Node.js container hosting, and SSR latency spikes. Static export pre-compiles every HTML, CSS, and JS bundle at build time, yielding:

- **Unmatched Security**: Zero server-side runtime code execution vulnerabilities.
- **99.999% Reliability**: Served directly by static web servers (Apache, Nginx, LiteSpeed).
- **Sub-100ms Global TTFB**: Instant cache hits anywhere in the world.

## Configuring next.config.ts for Export

Add \`output: 'export'\` and \`images: { unoptimized: true }\` to your Next.js configuration:

\`\`\`typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
\`\`\`

## Handling Dynamic Routes via generateStaticParams

For dynamic routes like \`/blog/[slug]\`, implement \`generateStaticParams\` to tell Next.js which paths to pre-render during \`npm run build\`:

\`\`\`typescript
export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}
\`\`\`

## Uploading to public_html

After running \`npm run build\`, Next.js creates the \`out/\` directory. Simply compress the contents of \`out/\` into a ZIP archive and extract it directly inside your cPanel \`public_html\` folder.
    `,
  },
  {
    id: 'post-3',
    slug: 'ebpf-zero-trust-kernel-threat-hunting',
    title: 'Autonomous Zero-Trust Threat Mitigation with eBPF Kernel Probes',
    excerpt:
      'How eBPF deep packet and syscall inspection allows IntelliForceAI Sentinel Shield to isolate zero-day security threats at the Linux kernel layer.',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
    date: 'June 30, 2026',
    readingTime: '7 min read',
    category: 'Cybersecurity',
    tags: ['eBPF', 'Linux Kernel', 'Cybersecurity', 'Zero-Trust'],
    author: {
      name: 'Victoria Palmer',
      role: 'Chief Information Security Officer',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop',
    },
    tableOfContents: [
      { id: 'ebpf-overview', text: '1. What is eBPF Kernel Tracing?', level: 2 },
      { id: 'zero-trust-architecture', text: '2. Zero-Trust Model Isolation', level: 2 },
      { id: 'threat-detection', text: '3. Real-Time Anomaly Classification', level: 2 },
    ],
    content: `
## What is eBPF Kernel Tracing?

Extended Berkeley Packet Filter (eBPF) enables running sandboxed programs in the Linux kernel without changing kernel source code or loading kernel modules.

By hooking into system calls like \`sys_enter_execve\` and \`sys_enter_connect\`, Sentinel Shield analyzes application behavior in real-time.

## Zero-Trust Model Isolation

When an AI model process attempts unauthorized socket connections or file system writes, eBPF probes immediately trigger automated process isolation in under **10 microseconds**.
    `,
  },
  {
    id: 'post-4',
    slug: 'sub-200ms-conversational-voice-ai-codecs',
    title: 'Achieving Sub-200ms Latency in Conversational Voice AI',
    excerpt:
      'Exploring streaming neural acoustic codecs, WebSocket duplexing, and zero-shot voice synthesis for natural human-like voice conversations.',
    coverImage: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop',
    date: 'June 12, 2026',
    readingTime: '4 min read',
    category: 'Research',
    tags: ['Voice AI', 'WebSockets', 'Neural Codec', 'Speech'],
    author: {
      name: 'Dr. Aris Thorne',
      role: 'Head of Voice AI',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    },
    tableOfContents: [
      { id: 'voice-latency-challenge', text: '1. The Conversational Latency Barrier', level: 2 },
      { id: 'streaming-codecs', text: '2. Streaming Acoustic Tokens', level: 2 },
    ],
    content: `
## The Conversational Latency Barrier

Human conversation has a natural turn-taking pause of **200ms to 300ms**. Traditional Voice AI pipelines with STT -> LLM -> TTS take **1.5s to 3s**, making interaction feel robotic and awkward.

## Streaming Acoustic Tokens

By combining continuous streaming ASR with direct neural token-to-speech generation over WebSocket duplex channels, IntelliForceAI Voice AI reduces end-to-end latency to **180ms**.
    `,
  },
];
