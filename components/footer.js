export default function Footer(){
    return (
        <div className="footer">
            <span>Copyright © 2021 Tüm Hakları Saklıdır.</span>

            <style jsx>{`
                 .footer {
                    background-color:#fff;
                    border-bottom:#ccc;   
                    text-align:center;
                    margin : 0 auto;
                    padding : 20px auto;
                }

                .footer span{
                    display:flex;
                    height:60px;
                    align-items:center;
                    justify-content:center;
                    padding : 0 20px;
                    color: #333;
                    text-decoration:none;
                }
            `}</style>
        </div>
    )
}