import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="d-flex flex-wrap justify-content-between align-items-center pt-3 pb-2 mt-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">Created by Soubhik for Udhrity &#x2764;</span>
                </div>

                <form className="d-flex gap-3 nav col-md-4 justify-content-end">
                    <div className="col-auto">
                        <input type="password" className="form-control" id="inputPassword2" placeholder="Message for Soubhik.."/>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn secondary-btn mb-3 d-flex align-items-center gap-2 justify-content-center"><Icon icon="mingcute:send-fill" width="24" height="24" />Send</button>
                    </div>
                </form>

            </footer>
        </div>
    )
}
