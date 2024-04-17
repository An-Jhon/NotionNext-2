import { siteConfig } from '@/lib/config'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  return <div className='w-full justify-center flex-wrap flex my-2'>
    <div className='space-x-3 text-xl text-gray-600 dark:text-gray-300 '>
    {siteConfig('CONTACT_STEAM') && <a target='_blank' rel='noreferrer' title={'steam'} href={siteConfig('CONTACT_STEAM')} >
        <i className='transform hover:scale-125 duration-150 fab fa-brands fa-steam dark:hover:text-teal-400 hover:text-teal-500' />
      </a>}
      {siteConfig('CONTACT_GITHUB') && <a target='_blank' rel='noreferrer' title={'github'} href={siteConfig('CONTACT_GITHUB')} >
        <i className='transform hover:scale-125 duration-150 fab fa-github dark:hover:text-teal-400 hover:text-teal-500' />
      </a>}
      {siteConfig('CONTACT_BILIBILI') && <a target='_blank' rel='noreferrer' title={'bilibili'} href={siteConfig('CONTACT_BILIBILI')} >
        <i className='transform hover:scale-125 duration-150 fab fa-bilibili dark:hover:text-teal-400 hover:text-teal-500' />
      </a>}
      {siteConfig('CONTACT_EMAIL') && <a target='_blank' rel='noreferrer' title={'email'} href={`mailto:${siteConfig('CONTACT_EMAIL')}`} >
        <i className='transform hover:scale-125 duration-150 fas fa-envelope dark:hover:text-teal-400 hover:text-teal-500' />
      </a>}
      {siteConfig('CONTACT_TWITTER') && <a target='_blank' rel='noreferrer' title={'twitter'} href={siteConfig('CONTACT_TWITTER')} >
        <i className='transform hover:scale-125 duration-150 fab fa-twitter dark:hover:text-teal-400 hover:text-teal-500' />
      </a>}
      {siteConfig('CONTACT_TELEGRAM') && <a target='_blank' rel='noreferrer' href={siteConfig('CONTACT_TELEGRAM')} title={'telegram'} >
        <i className='transform hover:scale-125 duration-150 fab fa-telegram dark:hover:text-teal-400 hover:text-teal-500' />
      </a>}
      {siteConfig('CONTACT_LINKEDIN') && <a target='_blank' rel='noreferrer' href={siteConfig('CONTACT_LINKEDIN')} title={'linkIn'} >
        <i className='transform hover:scale-125 duration-150 fab fa-linkedin dark:hover:text-teal-400 hover:text-teal-500' />
      </a>}
      {siteConfig('CONTACT_WEIBO') && <a target='_blank' rel='noreferrer' title={'weibo'} href={siteConfig('CONTACT_WEIBO')} >
        <i className='transform hover:scale-125 duration-150 fab fa-weibo dark:hover:text-teal-400 hover:text-teal-500' />
      </a>}
      {siteConfig('CONTACT_INSTAGRAM') && <a target='_blank' rel='noreferrer' title={'instagram'} href={siteConfig('CONTACT_INSTAGRAM')} >
        <i className='transform hover:scale-125 duration-150 fab fa-instagram dark:hover:text-teal-400 hover:text-teal-500' />
      </a>}
      {JSON.parse(siteConfig('ENABLE_RSS')) && <a target='_blank' rel='noreferrer' title={'RSS'} href={'/feed'} >
        <i className='transform hover:scale-125 duration-150 fas fa-rss dark:hover:text-teal-400 hover:text-teal-500' />
      </a>}
      {siteConfig('CONTACT_YOUTUBE') && <a target='_blank' rel='noreferrer' title={'youtube'} href={siteConfig('CONTACT_YOUTUBE')} >
        <i className='transform hover:scale-125 duration-150 fab fa-youtube dark:hover:text-teal-400 hover:text-teal-500' />
      </a>}

    </div>
  </div>
}
export default SocialButton