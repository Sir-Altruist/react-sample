import React from 'react'

export default function Partners() {
    return (
        <div className='partners'>
            <div>
                <h4>Trusted <span>Partners</span> Worldwide</h4><p></p>
                <p>We are very grateful and feel honoured to all our partners for being with us</p>
            </div>
            <section className='partners-box'>
                            <img src='/images/partners-image/partner-1.jpg' alt='img-1' className='box' />
                            <img src='/images/partners-image/partner-2.jpg' alt='img-2' className='box' />
                            <img src='/images/partners-image/partner-3.jpg' alt='img-3' className='box' />
                            <img src='/images/partners-image/partner-4.jpg' alt='img-4' className='box' />
                            <img src='/images/partners-image/partner-5.jpg' alt='img-5' className='box' /> 
            </section>
            <div className='subscribe'>
                <div className='container'>
                    <div className='row sub-text'>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <p>Subscribe to Our Newsletters</p>
                        </div>
                        <div className='col-lg-8 col-md-8 col-sm-12'>
                           <form>
                               <div className='input-group'>
                               <div>
                                    <input type='text' className='form-control sub-form' placeholder='Enter your Email-Address' />
                               </div>
                               <div className='input-group-append'>
                                   <button type='button' className='btn btn-md btn-primary'>Subscribe</button>
                               </div>
                               </div>
                           </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
