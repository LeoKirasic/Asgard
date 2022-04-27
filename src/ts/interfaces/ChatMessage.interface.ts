import DateProperties from './DateProperties.interface';

export default interface ChatMessageProps {
  id: string;
  timestamp: DateProperties;
  name: string;
  text: string;
  profilePicUrl: string;
}
