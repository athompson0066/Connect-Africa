export interface ChartData {
  name: string;
  value: number;
  secondary?: number;
}

export interface UseCase {
  id: string;
  title: string;
  organization: string;
  description: string;
  keyFactors: string[];
  impact: string;
  icon: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}