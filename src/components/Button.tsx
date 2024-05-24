function Button({ onClick, btnText, title, classes }: ButtonProps) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`${classes} capitalize duration-300 ease-in-out border-2 border-gray-900 rounded-xl dark:border-slate-100 dark:text-slate-100`}
    >
      {btnText}
    </button>
  );
}

export default Button;
