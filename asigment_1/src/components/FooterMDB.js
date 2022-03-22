import React, { Component } from 'react';
// import { MDBIcon } from 'mdbreact';
import {
   MDBIcon,
   MDBFooter
} from 'mdb-react-ui-kit';

class Footer extends Component {
   constructor(props) {
      super(props);

   }
   render() {
      return(
         <MDBFooter className='text-center text-white' style={{ backgroundColor: 'rgb(201 197 197)'}}>
            <div className='container p-4 pb-0'>
               <section className='mb-4'>
                  <a
                     className='btn btn-primary btn-floating m-1'
                     style={{ backgroundColor: '#3b5998' }}
                     href='#!'
                     role='button'
                  ><MDBIcon fab icon='facebook-f' />
                  </a>
                  <a
                     className='btn btn-primary btn-floating m-1'
                     style={{ backgroundColor: '#55acee' }}
                     href='#!'
                     role='button'
                  >
                     <MDBIcon fab icon='twitter' />
                  </a>

                  <a
                     className='btn btn-primary btn-floating m-1'
                     style={{ backgroundColor: '#dd4b39' }}
                     href='#!'
                     role='button'
                  >
                     <MDBIcon fab icon='google' />
                  </a>
                  <a
                     className='btn btn-primary btn-floating m-1'
                     style={{ backgroundColor: '#ac2bac' }}
                     href='#!'
                     role='button'
                  >
                     <MDBIcon fab icon='instagram' />
                  </a>

                  <a
                     className='btn btn-primary btn-floating m-1'
                     style={{ backgroundColor: '#0082ca' }}
                     href='#!'
                     role='button'
                  >
                     <MDBIcon fab icon='linkedin-in' />
                  </a>

                  <a
                     className='btn btn-primary btn-floating m-1'
                     style={{ backgroundColor: '#333333' }}
                     href='#!'
                     role='button'
                  >
                     <MDBIcon fab icon='github' />
                  </a>
               </section>
               <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  © 2022 developer:
                  <a className='text-white' href='/'>
                     khanhptFX15310
                  </a>
               </div>
            </div>
         </MDBFooter>
      )
   }
}

export default Footer;