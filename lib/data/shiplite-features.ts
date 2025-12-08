export interface ShipliteFeature {
  name: string;
  description: string;
  image: string | null;
}

export const shipliteFeatures: ShipliteFeature[] = [
  {
    name: 'Dashboard',
    description: 'Revenue analytics dashboard displaying total revenue, POD counts, and zone-based performance metrics with interactive charts and tables. Filters by time period (1w, 1m, 3m, 1y, all) and invoice status with stacked bar visualizations.',
    image: '/images/projects/shiplite/shiplite_landing.png',
  },
  {
    name: 'Invoices',
    description: 'Complete invoice lifecycle management with status tracking (unbilled → billed → paid out), CSV/PDF generation, financial reconciliation, and filtering by status, warehouse, and creator.',
    image: '/images/projects/shiplite/shiplite_invoices.png',
  },
  {
    name: 'Upload PODs & Duplicate Detection',
    description: 'Automated document processing workflow where users upload PDF bundles, AI extracts shipping data from scanned delivery documents, duplicate detection prevents re-billing the same booking number, and users review/edit extracted data before invoice generation.',
    image: '/images/projects/shiplite/shiplite_uploadpods.png',
  },
  {
    name: 'Manual Queue',
    description: 'Admin review queue for PODs flagged for manual processing. Admins can correct extraction errors, mark PODs as ready for invoicing, and batch-generate invoices from reviewed items.',
    image: '/images/projects/shiplite/shiplite_queue.png',
  },
  {
    name: 'Settings',
    description: 'Configuration hub for customers (billing entities), warehouses (shipping locations), drivers (dropdown auto-complete), and tariff rules (zone-based pricing tables).',
    image: '/images/projects/shiplite/shiplite_settings.png',
  },
  {
    name: 'Users & RBAC',
    description: 'Role-based access control system with admin and regular user permissions. Admins can create/delete users, manage organization-wide settings, and access all invoices. Regular users have restricted access to their own unbilled invoices only.',
    image: '/images/projects/shiplite/shiplite_users.png',
  },
];
