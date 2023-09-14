const Avatar = ({ userName, imageUrl, size }) => {
  return (
    <img
      alt={`Avatar of ${userName}`}
      className="avatar"
      src={imageUrl}
      width={size}
      height={size}
    />
  );
};

export default Avatar;
