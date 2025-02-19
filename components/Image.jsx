import { useRouter } from 'next/router';

const Image = ({ src, alt, ...props }) => {
  const { basePath } = useRouter();
  return <img src={`${basePath}${src}`} alt={alt} {...props} />;
};

export default Image;
