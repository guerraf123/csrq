import React, { useState } from 'react';
import TechSelectOptions from '../techs/TechSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions';
import { addAnsible } from '../../actions/ansibleActions';
import M from 'materialize-css/dist/js/materialize.min.js';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const AddLogModal = ({ addLog }) => {
  const [message,    setMessage] = useState('');
  const [attention,  setAttention] = useState(false);
  const [ansiblejob, setAnsiblejob] = useState(false);
  const [sqljob,     setSqljob] = useState(false);
  const [sqljobname,     setSqljobname] = useState('');  
  const [aduser,     setAdUser] = useState('');  
  const [copyfilejob,setCopyfilejob] = useState(false);
  const [tech, setTech] = useState('');
  const [ansible, setAnsible] = useState('');
  const [date, setDate] = useState(new Date());
  const handleChange = date => setDate(date);
  const [userid, setUserid] = useState('');
  const [adgroup, setAdGroup] = useState('');
  const today = new Date();
  let in3Days = new Date();
  in3Days.setDate(in3Days.getDate() + 3);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a description and software engineer' });
    } else {
      const newLog = {
        message,
        attention,
        ansiblejob,
        sqljob,
        sqljobname,
        aduser,
        copyfilejob,
        userid,
        adgroup,
        tech,
        ansible,
        date: new Date()
      };

      addLog(newLog);

      M.toast({ html: `Request added by ${tech}` });

      // Clear Fields
      setMessage('');
      setTech('');
      setAttention(false);
      setAnsiblejob(false);
      setSqljob(false);
      setSqljobname('')
      setAdUser('')
      setCopyfilejob(false);
      setAnsible('');
      setAdGroup('');
      setUserid('') 
    }
  };
  
  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter Deployment Request</h4>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={e => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>

        <div className='row'>
        <h4>Enter Deployment Date and Time</h4>
        </div>


        <DatePicker
              selected={date}
              onChange={handleChange}
              minDate={today}
              maxDate={in3Days}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />


          <div className='row'>
          <h4>Enter Pipeline</h4>
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
          <h4>   Ansible Job</h4>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={ansiblejob}
                  value={ansiblejob}
                  onChange={e => setAnsiblejob(!ansiblejob)}
                />
                <span>   Add Ansible Job</span>
              </label>
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='ansible'
              value={ansible}
              className='browser-default'
              onChange={e => setAnsible(e.target.value)}
            >
              <option value='' disabled>
                Ansible Job
                </option>
                <option value='Test Communications'>Test Communications</option> 
                <option value='Recycle Application Pool'>Recycle Application Pool</option> 
                <option value='CTG Server'>CTG Server check</option> 
                <option value='Reboot Server'>Reboot Server</option> 
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
              Team Selection
              </option>
              <option value='RS SRE'>RS SRE</option> 
              <option value='Avengers'>Avengers</option> 
              <option value='Architecture'>Architecture</option> 


          </select>
        </div>

    </div>

      <div className='row'>
        <div className='input-field'>
          <p>
          <label>
              <input
                type='checkbox'
                className='filled-in'
                checked={sqljob}
                value={sqljob}
                onChange={e => setSqljob(!sqljob)}
              />

              <span>Add SQL Job</span>
            <div className='input-field'>
              <input
                type='text'
                name='sqljobname'
                value={sqljobname}
                onChange={e => setSqljobname(e.target.value)}
              />
              <label htmlFor='sqljobname' className='active'>
                Enter SQL script to be executed
              </label>
            </div>
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
                checked={copyfilejob}
                value={copyfilejob}
                onChange={e => setCopyfilejob(!copyfilejob)}
              />
              <span>Add CopyFile Job C:\fg\copyfilejob.cmd</span>
              <div className='input-field'>
              <input
                type='text'
                name='copyfilejob'
                value={copyfilejob}
                onChange={e => setSqljobname(e.target.value)}
              />
              <label htmlFor='copyfilejob' className='active'>
                Enter Copy file Job script to be executed
              </label>
            </div>

            </label>
          </p>
        </div>
      </div>

      <div className='row'>
        <h4>Request User to be added to a defined AD GROUP 1 </h4>
          <div className='input-field'>
            <input
              type='text'
              name='userid'
              value={userid}
              onChange={e => setUserid(e.target.value)}
            />
            <label htmlFor='userid' className='active'>
              Enter userid to Add to AD Group
            </label>
          </div>
        </div>

      <div className='row'>
        <div className='input-field'>
          <select
            name='adgroup'
            value={adgroup}
            className='browser-default'
            onChange={e => setAdGroup(e.target.value)}
          >
            <option value='' disabled>
              Choose Active Directory group to Add User
              </option>
              <option value='rsfp_developers'>RSFP Developers</option> 
              <option value='reporting tier'>Reporting tier</option> 
              <option value='Reboot Server'>RS_ALLUSERS</option> 

          </select>
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
                <span>Auto Create CO</span>
              </label>
            </p>
          </div>
        </div>

      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Submit
        </a>
      </div>
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
