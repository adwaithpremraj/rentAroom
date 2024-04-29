
import React from 'react'



function Payment() {



  return (
    <>
    <div className='row justify-content-center align-items-center'>

      <div className="col-md-8"></div>
      

      <div className="col-md-6 border shadow rounded m-2 justify-content-center text-align-center align-items-center">
      <h1 className='justify-content-center align-items-center text-align-center' style={{color:'black', fontSize:"25px"}}>Payment Details</h1>
<div className='d-flex '>
       <label className='m-2' type='text'>Total Payement</label>
       <input className='form-control m-2 w-50' type="text" placeholder='₹2500' />
</div>

<div className='d-flex '>
       <label className='m-2' type='text'>Payment to be Paid in Advance</label>
       <input className='form-control m-2 w-50' type="text" placeholder='₹' />
</div>
     
<div className='d-flex '>
       <label className='m-2' type='text'>Email ID</label>
       <input className='form-control m-2 w-50' type="text" placeholder='abcd@gmail.com' />
</div>

<div className='d-flex '>
       <label className='m-2' type='text'>Phone Number</label>
       <input className='form-control m-2 w-50' type="text" placeholder='+91' />
</div>

<div className='d-flex '>
       <label className='' type='text'>Payment Method</label>
       <select class="form-select" >
  <option selected>Select Payment Method</option>
  <option value="1">GPay</option>
  <option value="2">Paytm</option>
  <option value="3">Rupee</option>
  <option value="4">Credit/Debit Cards</option>
  <option value="5">In Person</option>
</select>
</div>

      </div>
      

      <div className="col-md-8"></div>

    </div>


    </>
  )
}

export default Payment