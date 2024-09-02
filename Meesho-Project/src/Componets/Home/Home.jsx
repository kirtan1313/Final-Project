import React from 'react'
import { LuListTodo } from 'react-icons/lu'
import Porder from '../../assets/imags/pending-orders-icon.svg'
import Dlabel from '../../assets/imags/download-labels-icon.svg'
import Ostock from '../../assets/imags/out-of-stock-icon.svg'
import Lstock from '../../assets/imags/low-stock-icon.svg'
import Ads from '../../assets/imags/grow_business_with_ads.png'
import { MdOutlineChevronRight } from 'react-icons/md'



function Home() {

  return (
    <div id="main">
      <div className='bg-white p-2'>
        <div className='fs-5 fw-bold'>Welcome back, AJ Enterprise</div>
        <div className='home-text pt-1'>Manage and grow your business with Meesho</div>
      </div>
      <div className='col-8'>
        <div className='bg-white mt-2 rounded p-3'>
          <div className='ps-3 pt-2'>
            <span className='todo-list'><LuListTodo className='fs-5' /></span>
            <span className='fw-bold ps-3'>To do list</span>
          </div>
          <div className='d-flex pt-3 p-3 gap-1'>
            <div className="col-3 border border-1 rounded d-flex p-3 align-items-center order-box-hover">
              <div>
                <img src={Porder} alt="order" />
              </div>
              <div className='ps-3'>
                <div className='todo-order'>
                  Pending Order
                </div>
                <div className='todo-o '>
                  0
                  <span className='aero-po'><MdOutlineChevronRight className='fs-5' /></span>
                </div>
              </div>
            </div>
            <div className="col-3 border border-1 rounded  d-flex p-3 align-items-center  order-box-hover">
              <div>
                <img src={Dlabel} alt="lable" />
              </div>
              <div className='ps-3'>
                <div className='todo-order'>
                  Dowloand Labels
                </div>
                <div className='todo-o'>
                  0
                  <span className='aero-po'><MdOutlineChevronRight className='fs-5' /></span>


                </div>
              </div>
            </div>
            <div className="col-3 border border-1 rounded  d-flex p-3 align-items-center order-box-hover">
              <div>
                <img src={Ostock} alt="stock" />
              </div>
              <div className='ps-3'>
                <div className='todo-order'>
                  out of Stock
                </div>
                <div className='todo-o'>
                  0
                  <span className='aero-po'><MdOutlineChevronRight className='fs-5' /></span>
                </div>
              </div>
            </div>
            <div className="col-3 border border-1 rounded  d-flex p-3 align-items-center order-box-hover">
              <div>
                <img src={Lstock} alt="lstock" />
              </div>
              <div className='ps-3'>
                <div className='todo-order'>
                  Low Stock
                </div>
                <div className='todo-o'>
                  0
                  <span className='aero-po'><MdOutlineChevronRight className='fs-5' /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='pt-2'>
        <div class="card" style={{ width: '28rem', border: 'none' }}>
          <img src={Ads} class="card-img-top" alt="ads" className='p-3' />
          <div class="card-body">
            <h5 class="card-title fw-bold" style={{ fontSize: '15px' }} >More ads. More visibility. More orders</h5>
            <p class="card-text " style={{ fontSize: '13px', fontWeight: 600 }} >Reach more buyers & grow faster with ads.</p>
            <div>
              <a href="#" class="btn btn-primary">Create Campaign</a>
              <span style={{ fontSize: '13px', color: 'blue' }} className='ps-2 fw-bold'>View All Campaign</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home
