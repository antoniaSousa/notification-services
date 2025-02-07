export interface NotificationProps {
  recipient: string;
  content: string;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;
  constructor(props: NotificationProps) {
    this.props = props;
  }

  public get content(): string {
    return this.props.content;
  }

  public set recipient(recipient: string) {
    this.props.recipient = recipient;
  }
  public get recipient(): string {
    return this.recipient;
  }

  public set category(category: string) {
    this.props.category = category;
  }
  public get category(): string {
    return this.category;
  }

  public set readAt(readAt: Date | null) {
    this.props.readAt = readAt;
  }
  public get readAt(): string {
    return this.readAt;
  }

  public get createdAt(): Date {
    return this.createdAt;
  }
}
