import Layout from '../components/layout';

const sectionStyle = {
    marginTop: '100px' 
}

const index = () => (
    <Layout>
        <section className="container ml-auto"  style={sectionStyle}>
            <h1>About Page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                optio veritatis consectetur nobis voluptate tempore nemo quaerat
                non vel voluptatem ex autem reprehenderit ab porro doloremque
                cum placeat, perspiciatis nulla.
            </p>
        </section>
    </Layout>
);

export default index;
