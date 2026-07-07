export interface FranchiseOpportunity {
  id: string;
  name: string;
  sector: string;
  description: string;
  investmentRange: string;
  initialFee: string;
  setupCost: string;
  spaceRequired: string;
  trending?: boolean;
  highRoi?: boolean;
  highlight?: boolean;
  logoType: 'f&b-bowl' | 'f&b-coffee' | 'ev-car' | 'home-appliance';
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  quote: string;
  avatarUrl?: string;
  brand: string;
}

export interface EnquiryFormInput {
  name: string;
  phone: string;
  email: string;
  franchiseId: string;
  message: string;
}
