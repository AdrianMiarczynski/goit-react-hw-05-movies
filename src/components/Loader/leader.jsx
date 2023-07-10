import css from './leader.module.css';
const { BallTriangle } = require('react-loader-spinner');

const Loader = () => {
  return (
    <div className={css.loader}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
