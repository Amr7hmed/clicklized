
                <div className="signup__form">
                <label className='title'>Choose user type</label>
                <ul className='signup__radio'>
                    <li>
                        <input type="radio" value="supplier" name="filter" onChange={handleChange} />
                        <label >Supplier</label>
                    </li>
                    <li>
                        <input type="radio" value="buyer" name="filter" onChange={handleChange} />
                        <label >Buyer</label>
                    </li>
                </ul>


                <div className="form">
                    <div >
                        <label className="form-label">User name</label>
                        <input type="text" className="form-control" placeholder="Enter your user name" 
                        value={""}/>
                    </div>
                    <div >
                        <label className="form-label">Business email</label>
                        <input type="email" className="form-control" placeholder="Enter your business email" 
                        value={""}/>
                    </div>
                    <div >
                        <label className="form-label">Contact number</label>
                        <input type="text" className="form-control" placeholder="Enter your contact number" 
                        value={""}/>
                    </div>
                    <div >
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" 
                        value={""}/>
                    </div>
                    <div >
                        <button className='btn btn-send'>Sign up</button>
                    </div>
                    <div >
                        <span className='end'>
                        Already user ? <a href="#">Sign in</a>
                        </span>
                    </div>
                </div>
            </div>
