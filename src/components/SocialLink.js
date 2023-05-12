const SocialLink = ({ href, icon, itemClass }) => {
  return (
    <l>
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        <i className={icon}></i>
      </a>
    </l>
  )
}
export default SocialLink
