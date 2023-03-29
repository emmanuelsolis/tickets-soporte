import "./home.scss";

function Home() {
  return (
    <div className="base">
        
        <div>
            
            <section className="wlcm">
                    <h1>!Bienvenido¡</h1>
            </section>
            <section className="Abu">
                <div className="container1">
                    <div className="img"></div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident iure libero in ipsum veniam, unde labore temporibus molestias, repellat alias laudantium excepturi sapiente nihil voluptatibus soluta. Mollitia et iste a.</p>
                </div>
                <div className="container2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa itaque quis dolorum veritatis magnam amet incidunt, odio dicta doloribus qui consequuntur deserunt illum vel commodi veniam alias cum. At.</p>
                <div className="img"></div>
                </div>
            </section>
            <section className="tck">
            <span id="warn" class="material-symbols-outlined">
warning
</span>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nisi sequi accusamus, accusantium obcaecati et, officiis sunt ab odit qui laborum eaque pariatur voluptatibus dolor iusto cupiditate? Pariatur, reprehenderit expedita!</p>
            </section>
            <section className="cont">
            <span id="cont" class="material-symbols-outlined">
perm_phone_msg
</span>
            </section>
        </div>
    </div>
  )
}
export default Home