

const ProjectTitle = ({ title }: { title: string }) => {
    return (
        <div className='mx-16 text-white font-alfaSlab' style={{
            fontSize: "8rem"
        }}>
            {title}
        </div>
    );
}

export default ProjectTitle