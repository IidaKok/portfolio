import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

const Resume = () => {

    return (
        <div>
            <object data="IidaKokkonen_cv.pdf" width="1000" height="1000" type='application/pdf'/>
        </div>
    )
}
export default Resume