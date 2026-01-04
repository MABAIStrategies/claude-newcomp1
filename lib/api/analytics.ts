// Google Analytics 4 Event Tracking

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Track page view
 */
export function trackPageView(url: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
      page_path: url,
    });
  }
}

/**
 * Track custom event
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

// Specific event tracking functions

export function trackButtonClick(buttonName: string, location: string): void {
  trackEvent('button_click', {
    button_name: buttonName,
    location,
  });
}

export function trackFormStart(formName: string): void {
  trackEvent('form_start', {
    form_name: formName,
  });
}

export function trackFormSubmit(
  formName: string,
  success: boolean,
  errorMessage?: string
): void {
  trackEvent('form_submit', {
    form_name: formName,
    success,
    error_message: errorMessage,
  });
}

export function trackServiceView(serviceName: string): void {
  trackEvent('service_view', {
    service_name: serviceName,
  });
}

export function trackPortfolioView(projectName: string): void {
  trackEvent('portfolio_view', {
    project_name: projectName,
  });
}

export function trackROICalculatorUse(
  employees: number,
  hoursSaved: number,
  annualSavings: number
): void {
  trackEvent('roi_calculator_use', {
    employees,
    hours_saved: hoursSaved,
    annual_savings: annualSavings,
  });
}

export function trackPDFDownload(reportType: string): void {
  trackEvent('pdf_download', {
    report_type: reportType,
  });
}

export function trackExternalLink(url: string, linkName: string): void {
  trackEvent('external_link_click', {
    url,
    link_name: linkName,
  });
}
