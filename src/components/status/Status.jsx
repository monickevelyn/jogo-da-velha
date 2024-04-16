import { string, any } from 'prop-types'

const Status = ({ className, status }) => {
  return (
    <>
    <span className={className}>
        {status}
    </span>
    </>
  )
}

Status.propTypes = {className: string, status: any}

export default Status