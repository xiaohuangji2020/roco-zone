export interface ErrorData {
  msg: string;
  href: string;
  time: string;
  user: { id: string; name: string; phone: string };
  ip: string; 
  userAgent: string;
  appName: string;
  errorInfo: any;
}