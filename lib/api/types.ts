// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  source?: string; // Track which page the form was submitted from
}

// Lead Data for Webform3
export interface LeadData extends ContactFormData {
  timestamp: string;
  userAgent?: string;
  referrer?: string;
}

// Email Template Data
export interface EmailTemplateData {
  recipientEmail: string;
  recipientName: string;
  subject: string;
  templateType: 'contact-confirmation' | 'internal-notification';
  data: Record<string, string | number>;
}

// ROI Report Data
export interface ROIReportData {
  email: string;
  employees: number;
  avgSalary: number;
  hoursSavedPerWeek: number;
  softwareOverhead: number;
  results: {
    weekly: number;
    annual: number;
    efficiencyBoost: number;
  };
}
