import React from 'react'

const addClient = () => {
    return (
        <div>
             <form action=""  id="cont-form">
        <label htmlFor="pseudo">Pseudo</label>
        <br />
        <input
          type="text"
          name="pseudo"
         
      
        />
      
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
        
        />
  
        <br />
        <label htmlFor="password">Mot de passe</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
         
        />
       
        <br />
        <label htmlFor="password-conf">Message</label>
        <br/>
        
        <textarea
                  type="text"
                
                ></textarea>
       <div className='d-flex mt-4'>
       <input className='mr-2'  type="submit" value="Envoyer" />
        <input type="submit" value="Annuler" />
       </div>
      
       
      </form>
        </div>
    )
}

export default addClient
