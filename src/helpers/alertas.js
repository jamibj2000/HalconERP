import Swal from 'sweetalert2'
export function alerta(mensaje, tipo){
    Swal.fire({
        title: mensaje,
        icon: tipo,
        position: 'center',
        showConfirmButton: true,
        timer: '1000'
    });
}
export function alertaTimer(mensaje, tipo,timer){
    Swal.fire({
        title: mensaje,
        icon: tipo,
        position: 'center',
        showConfirmButton: true,
        timer: timer
    });

}

export function alertaSinBoton(message,type, position,timer){
    Swal.fire({
        position: position,
        icon: type,
        title: message,
        showConfirmButton: false,
        timer: timer
      })
    }
// Swal.fire({
        //   title: 'Do not dismiss!',
        //   icon: 'warning',
        //   showConfirmButton: false,
        //   allowOutsideClick: false,
        //   allowEscapeKey: false,
          
        // })
        ///
        // Swal.fire({
        //   title: 'Custom width, padding, color, background.',
        //   width: 600,
        //   padding: '3em',
        //   color: '#716add',
        //   background: '#fff url(/images/trees.png)',
        //   backdrop: `
        //     rgba(0,0,123,0.4)
        //   `,
        //   allowOutsideClick: false,
        // allowEscapeKey: false,
        // })

      //   MySwal.fire({
      //     title: <Navbar />,
      //     didOpen: () => {
      //       // `MySwal` is a subclass of `Swal` with all the same instance & static methods
      //       MySwal.showLoading()
      //     },
      //   }).then(() => {
      //     return MySwal.fire(<Navbar />)
      //   })