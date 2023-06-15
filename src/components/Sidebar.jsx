const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="img">
        <img src="logo192.png" alt="" />
      </div>
      <div className="title">Desenvolvedor</div>
      <div className="icons">
        <a className="linkedin" href="">🧯</a>
        <a className="github" href="">🚕</a>
        <a className="instagram" href="">🛴</a>
      </div>
      <div className="contatos">
          <hr />
        <div>
          <p>Telefone</p>
          <p>(0)0000-0000</p>
        </div>
        <div>
            <hr />
          <p>E-mail</p>
          <p>blablabla.com</p>
        </div>
        <hr />
        <div>
          <p>Localização</p>
          <p>Rio de Janeiro/RJ</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
