
export const NavBar = () => {
  const navItems  = {
    items : [
        {

            text: "Mission",
            url: "#",
          },
          {
       
            text: "Featured Tea",
            url: "#",
    
          },
          {
      
            text: "Locations",
            url: "#",
    
          },
    ],
    style: {
        textDecoration: 'underline'
    }
  }
   return (
       <nav>
        {navItems.items.map(item => <a href={item.url}>{item.text}</a>) }
        
       </nav>
   )

};
