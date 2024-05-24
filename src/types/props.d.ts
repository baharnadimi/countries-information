interface BaseProps {
  onClick: () => void;
}

interface BaseClasses {
  classes: string;
}

interface ChildrenProps {
  children: React.ReactNode;
}

interface HeaderProps extends BaseProps {
  mode: boolean;
}

interface FormProps {
  search: string;
  region: string;
  searchOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectOnChange: (e: ChangeEventHandler<HTMLSelectElement>) => void;
}

interface TitleProps extends BaseClasses {
  title: string;
}

interface TextProps {
  contentTitle: string;
  content: string;
}

interface ButtonProps extends BaseProps, BaseClasses {
  title?: string;
  btnText: React.ReactNode;
}

interface CountryPageProps {
  params: {
    code: string;
  };
}

interface BorderLinkProps {
  href: string;
  borderName: React.ReactNode;
}

interface ImageContainerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

interface LayoutProps extends ChildrenProps {
  isMain?: boolean;
}
