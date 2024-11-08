import React, { useState } from 'react';
import TechSelectOptions from '../techs/TechSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a description and software engineer' });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      };

      addLog(newLog);

      M.toast({ html: `Request added by ${tech}` });

      // Clear Fields
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter Deployment Request</h4>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Auto Create CO</span>
              </label>
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              ReleaseID for Pipeline
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={e => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Software Engineer
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='input-field'>
          <p>
            <label>
              <input
                type='checkbox'
                className='filled-in'
                checked={attention}
                value={attention}
                onChange={e => setAttention(!attention)}
              />
              <span>Add Ansible Job</span>
            </label>
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='input-field'>
          <p>
            <label>
              <input
                type='checkbox'
                className='filled-in'
                checked={attention}
                value={attention}
                onChange={e => setAttention(!attention)}
              />
              <span>Add SQL Job</span>
            </label>
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='input-field'>
          <p>
            <label>
              <input
                type='checkbox'
                className='filled-in'
                checked={attention}
                value={attention}
                onChange={e => setAttention(!attention)}
              />
              <span>Add CopyFile Job</span>
            </label>
          </p>
        </div>
      </div>

      <div className='row'>
        <div className='input-field'>
          <select
            name='tech'
            value={tech}
            className='browser-default'
            onChange={e => setTech(e.target.value)}
          >
            <option value='' disabled>
              Ansible Job
              </option>
            <TechSelectOptions />
          </select>
        </div>
      </div>
      <div className='row'>
        <div className='input-field'>
          <select
            name='tech'
            value={tech}
            className='browser-default'
            onChange={e => setTech(e.target.value)}
          >
            <option value='' disabled>
              Add User to Active Directoy
              </option>
            <TechSelectOptions />
          </select>
        </div>
      </div>

      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div >
  );
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default connect(
  null,
  { addLog }
)(AddLogModal);
