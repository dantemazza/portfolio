import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'shiplite',
    title: 'ShipLite',
    slug: 'shiplite',
    period: 'Oct 2025 - Present',
    shortDescription: 'An intelligent freight forwarding management platform that automates invoicing and document processing.',
    fullDescription: [
      'ShipLite is an intelligent freight forwarding management platform that automates the entire invoicing lifecycle from delivery documentation to payment tracking.',
      'The system uses AI to extract critical shipping information from scanned documents, eliminating manual data entry while providing comprehensive tools for rate management, customer billing, and financial operations.',
      'It handles multi-tenant operations with role-based access controls, enabling freight forwarders to manage their entire back-office workflow—from proof of delivery processing to invoice generation and payment reconciliation—in a single centralized platform.',
    ],
    role: 'Sole Creator & Maintainer',
    highlights: [
      'AI-powered document extraction from scanned delivery documents',
      'Multi-tenant architecture with role-based access controls',
      'Complete invoicing lifecycle management',
      'Currently supporting a $2.5M annual revenue freight-forwarding operation',
    ],
    images: [
      '/images/projects/shiplite/shiplite_landing.png',
      '/images/projects/shiplite/shiplite_queue.png',
      '/images/projects/shiplite/shiplite_processing.png',
      '/images/projects/shiplite/shiplite_invoices.png',
      '/images/projects/shiplite/shiplite_uploadpods.png',
      '/images/projects/shiplite/shiplite_settings.png',
    ],
  },
  {
    id: 'tricksandtrumps',
    title: 'tricksandtrumps.com',
    slug: 'tricksandtrumps',
    period: 'Jan 2024 - Present',
    shortDescription: 'A modern bridge website for playing the rubber bridge variant.',
    fullDescription: [
      'tricksandtrumps.com is a modern web application for playing rubber bridge, a popular variant of the classic card game Bridge.',
      'Built with a focus on real-time multiplayer gameplay and an intuitive user interface.',
    ],
    role: 'Backend/DevOps Engineer',
    collaborator: {
      name: 'Patrik Beqo',
      github: 'https://github.com/patbeqo',
    },
    highlights: [
      'Real-time multiplayer bridge gameplay',
      'Backend infrastructure and API development',
      'DevOps and deployment automation',
    ],
    images: [
      '/images/projects/tricksandtrumps/gameplay.png',
    ],
    liveUrl: 'https://tricksandtrumps.com',
  },
];
