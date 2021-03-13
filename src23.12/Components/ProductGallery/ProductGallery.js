import React,{useEffect,useState} from "react"
import {withRouter} from "react-router";
import axios from "axios";
import {useParams} from "react-router";
import ProCarousel from "../ProCarousel/ProCarousel";
import {connect} from "react-redux";
import {fetchLoading} from "../../redux/Loading/Loading-actions";

const ProductGallery = ()=>{
    const [images, setimage] = useState();

    let{proname} = useParams()
    useEffect(()=>{
        axios.get(`https://api.mandegar-shop.ir/api/detail/product/galleries/fetch/${proname}`).then(
            res => setimage(res.data)
        )
    },[proname])

    return(
        images
            ?
        <>
            <div className="d-none d-lg-flex flex-wrap flex-row-reverse " id="gallery">
                {/*{console.log(images)}*/}
                {images.map(item =>
                    (
                        <div key={item.id} className="col-6 p-1"><img className="col-12 px-0 " src={`https://api.mandegar-shop.ir/images/gallery/${item.image}`} alt=""/></div>
                    )
                )}
            </div>
            <div className="d-lg-none">
                <ProCarousel galleryData={images}/>
            </div>
        </>
            :
        null
    )
}


export default withRouter(ProductGallery)