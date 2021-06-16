
export const NavBar = () => {
  const navItems  = {
    items : [
        {

            text: "Mission",
            url: "#mission",
          },
          {
       
            text: "Featured Tea",
            url: "#tea",
    
          },
          {
      
            text: "Locations",
            url: "#locations",
    
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
