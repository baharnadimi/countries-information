function Text({ contentTitle, content }: TextProps) {
  return (
    <p className="text-lg">
      <span className="font-semibold capitalize">{contentTitle}:</span>{" "}
      {content}
    </p>
  );
}

export default Text;
