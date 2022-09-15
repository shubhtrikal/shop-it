import React from 'react'
import style from './style.module.css'
import { AiOutlineMenu } from 'react-icons/ai'
import {BsCartCheck} from 'react-icons/bs'
import {BiBell} from 'react-icons/bi'
import {GiDrippingTube} from 'react-icons/gi'
import {BsStars} from 'react-icons/bs'
import {FiPhoneCall} from 'react-icons/fi'
import {AiOutlineRight} from 'react-icons/ai'
const Home = () => {
    return (
        <>
            <div className= {style.navBar}>
                <div className = {style.navLeft}>
                    <AiOutlineMenu />
                </div>
                <div className = {style.navRight}>
                    <div>
                        <BsCartCheck/>
                    </div>
                    <div>
                        <BiBell/>
                    </div>
                </div>
            </div>
            <div class={style.landingPage}>
                <h1>About Diana</h1>
                <h3>A platform that looks out for you </h3>
                <p>Diana empowers you to understand how your body works so you can look and feel your best</p>
                <div class= {style.line}></div>
                <h2>Our Philosophy</h2>
                <h3>Sustainable wellness is a big-picture, inside out approach</h3>
                <p>Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness.</p>
                <h4>That’s why we’ve created an integrated ecosystem of:</h4>
                <div className = {style.icons}>
                    <GiDrippingTube color = '#A5A6F6'/>
                </div>
                <h5>Consciously formulated products that deliver feel-good results fast</h5>
                <div className = {style.icons}>
                    <BsStars color = '#A5A6F6'/>
                </div>
                <h5>In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body</h5>
                <div className = {style.icons}>
                    <FiPhoneCall color = '#A5A6F6'/>
                </div>
                <h5> In-app consultation portals that connect you with compassionate wellness experts</h5>
                <p>
                    Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.
                </p>
            </div>
            <div className = {style.middle1}>
                <h1>What makes us different?</h1>
                <h3>Reimagining and rewiring self-care</h3>
                <p>You care about conscious consumption, and so do we. </p>
                <p>When it comes to your health, “good enough” is not good enough. We’re here to flip the script on that narrative because you deserve the best </p>
                <p>We collaborate with researchers and doctors to</p>
                <ul>
                    <li>Help you get granular about your health and self-care with personalized insights, and</li>
                    <li>Equip you with simple, sustainable products that get the job done</li>
                </ul>
                <p>No to-the-moon-and-back claims in this neck of the woods.</p>
                <p>We’re just solving real problems for real people here.</p>
            </div>

            <div className = {style.middle2}>
                <h1>Liberate your everyday wellness </h1>
                {/* <h2>Shop our self-care products</h2> */}
                <p>Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.   </p>
                <div className = {style.button}>
                    Upgrade your self-care
                </div>
                <h3>
                    #NoNasties, we promise!
                </h3>
            </div>
            <div className = {style.middle2Image}>
                <img src = "karolina.jpg" alt = 'logo' />
            </div>
            <div className = {style.middle3}>
                <h1>Track Your Mood</h1>
                <p>All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day. 
</p>
                <div className = {style.button}>
                    Track you mood on the app
                </div>
            </div>
            <div className = {style.gallery}>
                <div className = {style.row}>
                    <div className = {style.col1}>
                        <img src = 'g1.jpg' alt = 'logo' />
                    </div>
                    <div className = {style.col1}>
                        <img src = 'g1.jpg' alt = 'logo' />
                    </div>
                </div>
                <div className = {style.row}>
                    <div className = {style.col1}>
                        <img src = 'g1.jpg' alt = 'logo' />
                    </div>
                    <div className = {style.col1}>
                        <img src = 'g1.jpg' alt = 'logo' />
                    </div>
                </div>
            </div>
            <div className = {style.middle4}>
                <h1>Track your period</h1>
                <p>Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data. 
</p>
                <div className = {style.button}>
                Track you period on the app
                </div>
            </div>
            <div className = {style.middle2Image}>
                <img src = "calender.jpeg" alt = 'logo' />
            </div>
            <div className = {style.middle5}>
                <h1>Consult with wellness experts</h1>
                <p>Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you. 
</p>
                <div className = {style.button}>Get a consultation</div>
            </div>
            <div className = {style.middle2Image}>
                <img src = "man.jpg" alt = 'logo' />
            </div>
            <div className = {style.middle6}>
                <p>With Diana, you’re in control of your health, your every day, and your story.</p>
            </div>
            <div className = {style.footer}>
                <ul>
                    <li> Products </li>
                    <li> Our Science </li>
                    <li> Vision and Mission </li>
                    <li> About us </li>
                </ul>
                <div className = {style.line2}></div>
                <p>Subscribe to our Newsletter</p>
                <form>
                    <div className = {style.form}>
                        <input className = {style.inputBox} type = 'text' placeholder='Enter your Email'/>
                        <input type = 'submit' className={style.submit} value = "Activate" />
                    </div>
                </form>
            </div>
        </>
    ) 
}

export default Home;