function Button({ children, onClick }) {
  return (
    <button
      className="bg-orange-500 w-20  mx-auto rounded-md font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
