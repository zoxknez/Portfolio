import { Globe, Smartphone, MonitorSmartphone, Code2 } from 'lucide-react';

export const portfolioProjects = [
  {
    id: 1,
    title: 'Neural Web Platform',
    description: 'AI-powered web aplikacija sa real-time analytics',
    type: 'WEB',
    technologies: ['React', 'Node.js', 'TensorFlow', 'WebGL'],
    gradient: 'from-cyan-500 via-blue-500 to-purple-600',
    icon: Globe,
  },
  {
    id: 2,
    title: 'Quantum Mobile App',
    description: 'Next-gen mobilna aplikacija sa AR integration',
    type: 'ANDROID',
    technologies: ['Kotlin', 'ARCore', 'Firebase', 'ML Kit'],
    gradient: 'from-green-400 via-emerald-500 to-teal-600',
    icon: Smartphone,
  },
  {
    id: 3,
    title: 'HyperSpace Desktop',
    description: 'Desktop aplikacija za 3D data visualization',
    type: 'WINDOWS',
    technologies: ['C#', '.NET 8', 'WPF', 'DirectX'],
    gradient: 'from-orange-400 via-rose-500 to-pink-600',
    icon: MonitorSmartphone,
  },
  {
    id: 4,
    title: 'Blockchain Explorer',
    description: 'Decentralizovana web3 aplikacija',
    type: 'WEB',
    technologies: ['React', 'Solidity', 'Web3.js', 'IPFS'],
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-600',
    icon: Code2,
  },
];
