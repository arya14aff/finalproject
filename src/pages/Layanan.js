export default function Layanan () {
    return ( 
        <div style={{backgroundColor:"#F3F7FD"}}>

        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
          
          <img src="img/logo.png"/>
            
            <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft:"800px"}}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#"> <img src="img/lg.png"/> Language</a>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-primary" aria-current="page" href="#">Pesanan Saya</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
            <div className="row m-5" >
            <div className="col-5" >
                <div className="border border-3 p-3 mb-4 "> <img src="img/profile.png"/>
               <a style={{fontSize:"23px"}}> Azkiya Melati </a>
                </div>
                <div className="border border-3 p-3 ">
                    
                <a href="/profile" className="nav-link active"><div className="border border-3 p-3 mb-3 rounded-3"  ><img src="img/l_data.png"  /> Lengkapi Data</div></a>
                    <div className="border border-3 p-3 mb-3 rounded-3"><img src="img/p_peng.png"/> Layanan Pengguna</div>
                    <div className="border border-3 p-3 rounded-3"><img src="img/keluar.png"/> Keluar</div>
                </div>
                </div>
            <div className="col border border-3 mt-5 mx-5" style={{marginBottom:"270px"}}>
              <center>
                <h4 className="p-2 pb-4">Pelayanan Pelanggan</h4>
                <img src="img/wa.png" className="px-3"/>
                <img src="img/gmail.png"/>
              </center>
            </div>
            </div>
                {/* bagian credit */}
            <div style={{backgroundColor:"#575A63"}}>
              <font color="#FFFFFF" > 
                <div className="row mx-5 pt-4" >
                <div className="col">
                <h5><b>Menu</b></h5><br/>
                  <p>Beranda</p>
                  <p>Produk</p>
                  <p>Kontak</p>
                </div>
                <div className="col">
                <h5><b>Kontak Kami</b></h5><br/>
                  <p>+0822-1023-777</p>
                  <p>contoh@gmail.com</p>
                  <p>Sleman, Yogyakarta</p>
                </div>
                <div className="col">
                
                </div>
                <div className="col">
                <h5><b>Sosial Media</b></h5><br/>
                <p>
                  <img src="img/ig.png" style={{width:"40px"}} /> <img src="img/yt.png" style={{width:"40px"}} /> <img src="img/fb.png" style={{width:"40px"}}/>
                </p>
                <p>Created By GarudaNih.</p>
                
                </div>
                
                </div>
        
                
                </font>
        
        
              </div>
        
        
        
        
        
            </div>
    )
}