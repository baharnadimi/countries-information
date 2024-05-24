function Title({ title, classes }: TitleProps) {
  return <h2 className={`font-extrabold ${classes}`}>{title}</h2>;
}

export default Title;
