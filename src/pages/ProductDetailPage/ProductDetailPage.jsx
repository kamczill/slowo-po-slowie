import React, { useState } from 'react'
import placeholder from './../../assets/blog-placeholder.png'
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const ProductDetailPage = () => {
    const [isOpenDesc, setIsOpenDesc] = useState(false)

    const handleToggleDesc = () => {
        setIsOpenDesc(!isOpenDesc)
    }
  return (
    <div className='bg-[#F6F6F6] min-h-[50vh] w-full flex flex-col items-center '>
        <div className='p-5 py-8 flex flex-col items-center justify-center font-ms gap-10 max-w-[1160px]'>
            <div className={`flex flex-col gap-5 lg:flex-row`}>
                <div className='max-w-[400px]'>
                    <img src={placeholder} alt={''}/>
                </div>
                <div className='max-w-[400px] lg:p-5 lg:max-w-[700px] flex flex-col gap-4'>
                    <h3 className='font-bold text-xl pointer lg:hover:underline lg:hover:decoration-2'>Karty do gry “Słowo po słowie”</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an</p>
                    <button onClick={handleToggleDesc} className='text-left inline-flex items-center gap-2'>
                        Pełny opis 
                        {isOpenDesc ? <IoChevronUp /> : <IoChevronDown />}
                        </button>
                    <p className='font-bold text-xl'>100.00 zł</p>
                    <button type="submit" className='w-full rounded-md text-center text-white py-3  bg-[#303030] p-2 md:max-w-[350px]'>
                        Dodaj do koszyka
                    </button>
                </div>
            </div>
        {isOpenDesc && (    
            <div className='flex flex-col gap-4'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum non purus in ultricies. Fusce venenatis eros metus, a rhoncus enim lacinia vitae. Nulla facilisi. Praesent fringilla magna non elit fringilla tempor. Curabitur pharetra urna eu pretium gravida. Etiam posuere velit magna, eget porta nulla pretium dignissim. Etiam arcu eros, condimentum eu orci ac, tempus blandit odio. Suspendisse nec faucibus velit, id faucibus quam. Curabitur tempor vestibulum quam pretium dignissim. Nunc blandit, diam quis aliquam volutpat, arcu elit suscipit massa, in tempor sapien odio id tellus. Donec tristique tempus augue sit amet tempor. Maecenas pharetra neque urna, quis iaculis metus cursus eu. Morbi quis felis a elit ultricies elementum pharetra sit amet elit.
                </p>
                <p>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam luctus eleifend turpis, vitae elementum ipsum mollis sit amet. Integer a libero vitae ligula congue mattis et sed ipsum. Donec sodales sem et purus fringilla, ac laoreet orci facilisis. Nunc a hendrerit turpis. Suspendisse potenti. Nunc pulvinar dui non pharetra euismod. Mauris congue, elit sed porta mattis, eros est aliquam nisi, eget mattis nulla dui quis sapien. Praesent nec placerat ipsum. Aenean turpis arcu, tempus sit amet odio at, aliquam gravida justo. Nulla ultrices massa in ultrices rhoncus. Sed scelerisque quam malesuada tristique consectetur. Nullam eleifend leo at dui tincidunt, scelerisque gravida erat tincidunt. Sed venenatis scelerisque leo, pharetra hendrerit eros hendrerit vitae. Morbi semper consequat lorem, ac scelerisque est semper at.
                </p>
                <p>
                Aenean eget leo leo. Pellentesque fringilla consectetur sapien, vitae efficitur nunc faucibus id. Donec et libero quis mi efficitur imperdiet sed nec lorem. Quisque dignissim sed risus sit amet fringilla. Mauris gravida, risus in rutrum convallis, orci mauris ultrices sapien, nec semper metus turpis sed ligula. Ut tempor lorem ut rhoncus commodo. Duis lacinia tortor ut accumsan fringilla. Phasellus tempus quam eu facilisis maximus. Nam egestas magna velit, quis malesuada ex euismod vel. Proin erat lorem, efficitur ut maximus non, viverra vel libero. Pellentesque egestas, sem aliquam feugiat varius, quam purus posuere justo, eu pretium mauris nunc ut magna. Aliquam a arcu dolor.
                </p>
                <p>
                Duis sagittis dictum nulla eu blandit. Donec elementum gravida augue sed molestie. Integer consectetur quam consequat risus rutrum, ac pretium justo varius. Duis maximus imperdiet mi id scelerisque. 
                </p>
            </div>
        )}
        </div>
    </div>  
    )
}

export default ProductDetailPage