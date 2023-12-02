import React from 'react'
import teamImg from './../../assets/team.png'
const AboutUsPage = () => {
  return (
    <div className='bg-[#F6F6F6] min-h-[50vh] w-full flex flex-col items-center '>
        <div className='mt-12 py-8 max-w-[1400px] px-6 bg-white w-full md:px-8 flex flex-col items-center gap-8 lg:px-14'>
        <h2 className='font-semibold text-3xl text-center'>Poznajmy się</h2>
          <div className='w-full max-w-[700px]'>
            <img src={teamImg} className='w-full'/>
          </div>
          <main className='flex flex-col gap-4 px-12'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus urna eu ligula maximus mollis. Vestibulum malesuada odio sed ipsum faucibus eleifend. Proin a lobortis risus. Sed sed leo turpis. Donec urna ante, tristique et metus quis, fermentum maximus nulla. Fusce dignissim ipsum arcu, eu fringilla velit luctus nec. Fusce viverra ex ac mauris molestie gravida. Proin nec dictum tortor, vitae feugiat dolor. Phasellus lobortis, massa rhoncus finibus vestibulum, tortor felis scelerisque nulla, eget facilisis augue tellus eget massa. Duis semper erat a tellus fermentum, quis auctor ipsum hendrerit. Curabitur aliquam dui id nisl accumsan, in euismod dolor ullamcorper. Duis in quam in ante facilisis vehicula eu id lacus. Maecenas ut aliquam lacus. Nam eu tempus nisl.</p>
            <p>Nulla quis purus lorem. Quisque at tincidunt enim. Praesent et lectus a elit bibendum imperdiet. Pellentesque lacinia eros vel purus consequat, non porttitor sem dapibus. Morbi a pretium purus, vel interdum sem. Donec porta malesuada dui, at cursus odio laoreet sit amet. Nulla et vestibulum sem. Vestibulum sed lorem eget nulla placerat vehicula sit amet vitae augue. Cras bibendum consequat finibus. Nulla vel ullamcorper eros. Nullam lobortis a lacus non varius. Integer hendrerit velit quis augue ullamcorper, eget semper purus rutrum.</p>
            <p>Nunc ac porttitor purus. Donec suscipit enim quis lorem consectetur, non porta mauris lobortis. Aliquam molestie lacus velit, vel condimentum lectus rhoncus a. Ut aliquet ac libero quis pretium. Suspendisse sed feugiat orci, id placerat est. Vestibulum sed ex vitae justo sagittis mattis. Maecenas semper risus felis, eget lacinia ex pretium et. Cras maximus hendrerit dignissim. Praesent varius tristique massa, vel lobortis leo varius in. Suspendisse vitae orci non metus accumsan semper at vel nibh. Maecenas ex nisi, luctus ut magna vitae, maximus vehicula leo. Maecenas aliquet nibh id sollicitudin fermentum. Integer dapibus non dolor et molestie. Aliquam porttitor luctus lectus ut egestas. Pellentesque ut imperdiet eros.</p>
          </main>
        </div>
    </div>
  )
}

export default AboutUsPage