import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';
import { useState } from 'react';
import { CustomizedModal } from '../components/CustomizedModal';
import { RegistryModalContent } from '../components/RegistryModalContent';
import Title from '../components/Title';
import Step from '../components/Step';
import {Carousel, Image as Img} from "antd";
import carousel1 from "../public/carousel/carousel-1.jpg";
import carousel2 from "../public/carousel/carousel-2.jpg";
import carousel3 from "../public/carousel/carousel-3.jpg";
import carousel4 from "../public/carousel/carousel-4.jpg";
import carousel5 from "../public/carousel/carousel-5.jpg";

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setIsModalOpen(false);
  };

  return (
    <div className='h-full'>
      {isModalOpen && (<CustomizedModal
        open={isModalOpen}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        closeIcon={null}
      >
        <RegistryModalContent />
      </CustomizedModal>)}
      <Head>
        <link rel="icon" href="/favicon.ico" />

        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;0,600;0,700;1,500;1,700&display=swap"
          rel="stylesheet" />
        {/*<link rel="stylesheet" href="https://use.typekit.net/eao3xkl.css" />*/}
        <title>Todo Bubki</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <header>
        <h1 className='relative h-fit w-full'>
          <Box className='absolute z-10'>
            <div className='flex w-full justify-between py-5 items-center border'>
              <div className='text-3xl font-bold flex'>Logo</div>
              <nav className='font-root flex font-medium text-lg items-center'>
                <div className='px-6 py-2'>
                  <a href='/about' className='text-2xl font-medium text-center hover:text-highlight'><Text tid={'about'} /></a>
                </div>
                <div className='px-6 py-2'>
                  <a href='/univers-list' className='text-2xl font-medium text-center hover:text-highlight'><Text tid={'universityList'} /></a>
                </div>
                <div className='px-6 py-2'>
                  <a href='/contacts' className=' font-medium text-center text-2xl hover:text-highlight'><Text tid={'contacts'} /></a>
                </div>
                <div className='text-2xl font-medium text-center px-6 py-2 hover:text-highlight'>Rus</div>
                <Button onClick={showModal}>
                  <Text tid={'profile'} />
                </Button>
              </nav>
            </div>
          </Box>
          <Carousel className='flex relative w-full h-[700px] top-0 text-white p-8' autoplay >
            <div className='w-full'>
              <Img src={carousel1.src} preview={false}
                   title={"Международная стипендия"}
                   alt={"Получить международную стипендию в Казахстане"}
              />
              <div className={'absolute z-10 top-[50%] left-[50%]'}>centered</div>
            </div>
            <div>
              <Img className='w-full' src={carousel2.src} preview={false}
                   title={""}
                   alt={""}
              />
              <div className={'absolute z-10 top-[50%] left-[50%]'}>centered</div>
            </div>
            <div className='w-full'>
              <Img src={carousel3.src} preview={false}
                   title={""}
                   alt={""}
              />
              <div className={'absolute z-20 top-[90%] left-[50%]'}>centered</div>
            </div>
            <div className='w-full'>
              <Img src={carousel4.src} preview={false}
                   title={""}
                   alt={""}
              />
              <div className={'absolute z-10 top-[50%] left-[50%]'}>centered</div>
            </div>
            <div className='w-full'>
              <Img src={carousel5.src} preview={false}
                   title={""}
                   alt={""}
              />
              <div className={'absolute z-10 top-[50%] left-[50%]'}>centered</div>
            </div>
          </Carousel>
        </h1>
      </header>

      <main className='w-full overflow-hidden relative'>
        {/* <img src='/back-main.png' /> */}
        <Image src='/main/back-main.png' layout='fill' objectFit='cover' />
        <Title>Как поступить?</Title>
        <div>
          <div className='flex w-full items-center justify-center'>
            <div className='w-1/2 flex'>
              <img src='/main/questions.png' className='w-1/2 h-auto m-auto' alt='questions' />
            </div>
            <ul className='w-1/2'>
              <Step index='01' title='Зайти в личный кабинет' />
              <Step index='02' title='Выбрать ВУЗ' />
              <Step index='03' title='Выбрать тип обучения' />
            </ul>
          </div>
          <div className='flex w-full items-center justify-center'>
            <div className='w-1/2 flex justify-end'>
              <ul>
                <Step index='04' title='Подать документы' />
                <Step index='05' title='Пройти тестирование' />
                <Step index='06' title='Получить ответ в личном кабинете' />
              </ul>
            </div>
            <div className='w-1/2 flex'>
              <img src='/main/select.png' className='w-1/2 h-auto m-auto' alt='questions' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );};

export default Home;
