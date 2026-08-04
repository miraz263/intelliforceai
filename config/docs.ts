export type DocProduct =
  | 'IntelliForceAI 2.0'
  | 'Sentinel Shield'
  | 'BlackMarlin OMS'
  | 'Vision AI';

export type DocCategory =
  | 'Installation'
  | 'User Guide'
  | 'Admin Guide'
  | 'API Reference'
  | 'SDK Reference'
  | 'Release Notes'
  | 'Migration Guide'
  | 'Troubleshooting'
  | 'FAQ';

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export interface DocArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  product: DocProduct;
  category: DocCategory;
  version: string;
  lastUpdated: string;
  readingTime: string;
  content: string;
  tableOfContents: TocItem[];
  prevDoc?: { title: string; slug: string };
  nextDoc?: { title: string; slug: string };
}

export interface DocsConfig {
  badge: string;
  title: string;
  description: string;
  products: {
    name: DocProduct;
    description: string;
    iconName: string;
    defaultSlug: string;
  }[];
  articles: DocArticle[];
}

export const docsProducts: DocProduct[] = [
  'IntelliForceAI 2.0',
  'Sentinel Shield',
  'BlackMarlin OMS',
  'Vision AI',
];

export const docsCategories: DocCategory[] = [
  'Installation',
  'User Guide',
  'Admin Guide',
  'API Reference',
  'SDK Reference',
  'Release Notes',
  'Migration Guide',
  'Troubleshooting',
  'FAQ',
];

export const docsConfig: DocsConfig = {
  badge: 'Documentation Center',
  title: 'IntelliForceAI Technical Documentation',
  description:
    'Comprehensive guides, API references, Rust SDK benchmarks, deployment runbooks, and release notes for all enterprise products.',
  products: [
    {
      name: 'IntelliForceAI 2.0',
      description: 'Distributed multi-agent operating system with lock-free Rust IPC bus.',
      iconName: 'Cpu',
      defaultSlug: 'intelliforceai-2-0-quickstart',
    },
    {
      name: 'Sentinel Shield',
      description: 'Zero-trust eBPF kernel security agent with ML threat mitigation.',
      iconName: 'ShieldCheck',
      defaultSlug: 'sentinel-shield-admin-guide',
    },
    {
      name: 'BlackMarlin OMS',
      description: 'Sub-millisecond financial order management & risk execution system.',
      iconName: 'Zap',
      defaultSlug: 'blackmarlin-oms-api-reference',
    },
    {
      name: 'Vision AI',
      description: 'Real-time multi-camera spatial tracking & industrial inspection.',
      iconName: 'Eye',
      defaultSlug: 'vision-ai-sdk-guide',
    },
  ],
  articles: [
    {
      id: 'doc-ag2-quickstart',
      slug: 'intelliforceai-2-0-quickstart',
      title: 'IntelliForceAI 2.0 Quickstart & Installation',
      description: 'Learn how to install, configure, and initialize the IntelliForceAI 2.0 Multi-Agent OS on Linux or bare-metal GPU clusters.',
      product: 'IntelliForceAI 2.0',
      category: 'Installation',
      version: 'v2.4.0',
      lastUpdated: 'August 2026',
      readingTime: '6 min read',
      tableOfContents: [
        { id: 'prerequisites', title: 'System Prerequisites', level: 2 },
        { id: 'installation-steps', title: 'Installation Steps', level: 2 },
        { id: 'configuration', title: 'Cluster Configuration', level: 2 },
        { id: 'verification', title: 'Health Verification', level: 2 },
      ],
      nextDoc: { title: 'Rust SDK Reference', slug: 'intelliforceai-2-0-rust-sdk' },
      content: `
## System Prerequisites

Before initializing IntelliForceAI 2.0, verify that your host system meets the baseline requirements:

- **Linux Kernel**: 5.15+ (x86_64 or AArch64)
- **Memory**: 32 GB RAM (64 GB+ recommended for large multi-agent swarms)
- **Accelerators**: NVIDIA H100, A100, or L40S GPUs with CUDA 12.2+ drivers installed
- **Rust Toolchain**: 1.78.0 or later (for native IPC bindings)

## Installation Steps

Install the native binary toolchain using your preferred package manager:

\`\`\`bash
# Install via Cargo / Rust Toolchain
cargo install intelliforceai-cli --version 2.4.0

# Verify CLI installation
agy --version
\`\`\`

> [!TIP]
> For containerized Kubernetes environments, deploy using our Helm chart: \`helm repo add intelliforceai https://charts.intelliforceai.ai\`

## Cluster Configuration

Create an \`intelliforceai.yaml\` cluster manifest in your root project directory:

\`\`\`yaml
version: "2.4"
cluster:
  name: "production-swarm-01"
  ipc_bus: "shared_memory"
  max_agents: 64
nodes:
  - id: "gpu-node-01"
    address: "10.0.1.15:9090"
    gpus: [0, 1]
\`\`\`

## Health Verification

Run the diagnostics suite to verify lock-free IPC latency:

\`\`\`bash
agy cluster ping --config intelliforceai.yaml
\`\`\`
`,
    },
    {
      id: 'doc-ag2-rust-sdk',
      slug: 'intelliforceai-2-0-rust-sdk',
      title: 'IntelliForceAI 2.0 Rust SDK Reference',
      description: 'Comprehensive API documentation for the Rust SDK, IPC channels, and agent spawn primitives.',
      product: 'IntelliForceAI 2.0',
      category: 'SDK Reference',
      version: 'v2.4.0',
      lastUpdated: 'August 2026',
      readingTime: '10 min read',
      tableOfContents: [
        { id: 'sdk-overview', title: 'SDK Overview', level: 2 },
        { id: 'spawning-agents', title: 'Spawning Micro-Agents', level: 2 },
        { id: 'message-passing', title: 'Lock-Free Message Passing', level: 2 },
      ],
      prevDoc: { title: 'IntelliForceAI 2.0 Quickstart', slug: 'intelliforceai-2-0-quickstart' },
      content: `
## SDK Overview

The \`intelliforceai-sdk\` Rust crate provides zero-copy abstractions for high-frequency agent coordination.

\`\`\`rust
use intelliforceai_sdk::prelude::*;

#[tokio::main]
async fn main() -> Result<(), SwarmError> {
    let swarm = SwarmBuilder::new()
        .with_ipc(IpcMode::SharedMemory)
        .build()
        .await?;

    let agent = swarm.spawn_agent("research-worker-1").await?;
    println!("Agent spawned with ID: {}", agent.id());
    Ok(())
}
\`\`\`

> [!NOTE]
> All IPC message passing utilizes ring-buffer ring-allocators for zero garbage collection overhead.
`,
    },
    {
      id: 'doc-sentinel-admin',
      slug: 'sentinel-shield-admin-guide',
      title: 'Sentinel Shield Administrator Guide',
      description: 'Configure eBPF kernel threat monitoring, automated mitigation policies, and SOC2 audit logging.',
      product: 'Sentinel Shield',
      category: 'Admin Guide',
      version: 'v1.8.2',
      lastUpdated: 'July 2026',
      readingTime: '8 min read',
      tableOfContents: [
        { id: 'ebpf-setup', title: 'eBPF Probe Loading', level: 2 },
        { id: 'policy-rules', title: 'Configuring Security Policies', level: 2 },
      ],
      content: `
## eBPF Probe Loading

Sentinel Shield attaches eBPF probes to raw socket buffers and syscall entrypoints to detect abnormal process behavior.

\`\`\`bash
# Load Sentinel Shield Kernel Module
sudo sentinelctl load-probes --mode enforce
\`\`\`

> [!WARNING]
> Ensure kernel debugfs and tracefs are mounted before executing probe load commands.
`,
    },
    {
      id: 'doc-blackmarlin-api',
      slug: 'blackmarlin-oms-api-reference',
      title: 'BlackMarlin OMS High-Frequency API Reference',
      description: 'FIX protocol endpoints, WebSockets market data feed, and sub-millisecond execution order APIs.',
      product: 'BlackMarlin OMS',
      category: 'API Reference',
      version: 'v3.1.0',
      lastUpdated: 'August 2026',
      readingTime: '12 min read',
      tableOfContents: [
        { id: 'fix-endpoints', title: 'FIX Protocol Endpoints', level: 2 },
        { id: 'order-execution', title: 'Order Execution API', level: 2 },
      ],
      content: `
## Order Execution API

Post orders directly to the low-latency match engine:

\`\`\`json
POST /api/v3/orders/submit
Host: oms.intelliforceai.ai
Content-Type: application/json

{
  "symbol": "BTC-USD",
  "side": "BUY",
  "type": "LIMIT",
  "price": "68500.00",
  "quantity": "2.5"
}
\`\`\`
`,
    },
    {
      id: 'doc-vision-sdk',
      slug: 'vision-ai-sdk-guide',
      title: 'Vision AI Spatial Tracking SDK Guide',
      description: 'Multi-camera stream ingestion, TensorRT acceleration, and spatial coordinate tracking.',
      product: 'Vision AI',
      category: 'SDK Reference',
      version: 'v1.5.0',
      lastUpdated: 'June 2026',
      readingTime: '7 min read',
      tableOfContents: [
        { id: 'stream-ingestion', title: 'RTSP Stream Ingestion', level: 2 },
      ],
      content: `
## RTSP Stream Ingestion

Initialize multi-camera RTSP ingestion:

\`\`\`python
from vision_ai import CameraStreamManager

manager = CameraStreamManager()
manager.add_stream("rtsp://192.168.1.50:554/stream1")
manager.start_inference()
\`\`\`
`,
    },
  ],
};
