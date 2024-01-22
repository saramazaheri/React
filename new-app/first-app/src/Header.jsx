function Header() {
  const isLogin = true;

  return (
    <div>
      <header>
        {isLogin ? (
          <div>
            <button>Dashboard</button>
            <button>Basket</button>
          </div>
        ) : (
          <button>Login</button>
        )}
      </header>
    </div>
  );
}

export default Header;
