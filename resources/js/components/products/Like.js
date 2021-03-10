import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {geturl , dislike , dolike , isliked} from './functions';

const Like=(props)=>{
    const [like, setlike] = useState(false);
    useEffect(() => {

        var liked=localStorage.getItem('prod'+props.id);
        if(liked =='liked'){
            setlike(true);
        }
        else{
            setlike(false);
        }

    }, [])
    const handlelike=(id)=>{
        
        setlike(!like);
        var liked =isliked(id)

        if(liked=='liked'){
            dislike(id);
            document.getElementById('like'+id).classList.toggle('like')
            axios.post(geturl()+'dislikeproduct/'+id).then(res=>{
        
                dislike(id)
            }).catch(error=>error(error));
        }
        else{
            document.getElementById('like'+id).classList.toggle('like')
            axios.post(geturl()+'likeproduct/'+id).then(res=>{

                dolike(id)
            }).catch(error=>error(error));
        }
    }

    
    return (
        <span onClick={()=>handlelike(props.id)} id={'like'+props.id} className='unselectable icon-shadow' style={{width:'60px'}}>
            <svg   width="20" height="23"  viewBox="0 0 987 938" fill={like?"#44f":'#fff'} xmlns="http://www.w3.org/2000/svg">
                <path  stroke={like?"#008":'black'} d="M303 432.003V881.667L264.954 918.003H68.9908C51.9816 918.003 19.9999 889.854 20 855.928V479.442C20 456.003 49.9816 432.003 68.9908 432.003H303Z"  strokeWidth={"39"}/>
                <path  stroke={like?"#008":'black'} d="M474.999 185.003C474.999 207.003 344 454.003 344 454.003C334.999 459.003 309 461.003 309 461.003L311 843.003L405 877.003C405 877.003 825 878.003 839 877.003C852.999 876.003 863.398 864.685 873 851.003C884.971 833.944 889.221 819.412 885 799.003C881.444 781.815 853.038 776.645 861 761.003C867.386 748.454 883.176 756.65 895 749.003C908.943 739.985 917.814 732.778 923 717.003C927.146 704.389 924.473 696.199 923 683.003C920.791 663.225 897.99 650.13 909 634.003C915.117 625.042 933 621.003 933 621.003C933 621.003 958.783 599.188 963 579.003C966.915 560.26 962.603 548.576 955 531.003C948.505 515.992 928.932 513.565 932 496.003C934.947 479.129 958.866 476.997 965 461.003C970.033 447.876 967.39 438.857 965 425.003C961.668 405.7 945 379.003 945 379.003C945 379.003 912.999 341.003 895 341.003H603C603 341.003 617.128 289.169 623 255.003C629.24 218.693 636.791 197.724 633 161.003C630.48 136.601 630.795 122.881 620 100.003C609.024 76.7441 604.308 64.2822 581 48.0031C563.758 35.9612 552.028 19.2835 530.999 19.0031C509.244 18.713 478.999 39.0031 478.999 39.0031C478.999 39.0031 474.999 163.003 474.999 185.003Z"  strokeWidth={"38"}/>
            </svg>
        </span>
    )
}



export default Like;