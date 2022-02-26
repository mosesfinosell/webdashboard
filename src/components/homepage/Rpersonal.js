export default function Rpersonal() {
	return (
		<div className='App'>
			<div className='White-Box'>
				<img
					src='../images/Logomark.png'
					className='Logo-mark'
					alt='Finosell Logo'
				/>
				<h3 className='text-personal-Acc-page'>Create your personal account</h3>
				<p className='text-personalinfo'>Use your Personal Information</p>

				<div className='input-pad'>
					<div className='input-text-label'>Name</div>
					<div className='form-group has-search input-style'>
						<span className='fa fa-user fa-fw form-control-feedback user-icon1'></span>
						<input
							type='text'
							className='form-control input-type1'
							placeholder='Jumoke Adetola'></input>
					</div>

					<div className='form-group has-search input-style'>
						<div className='input-text-label'>Email</div>
						<span className='fa fa-envelope fa-fw form-control-feedback user-icon1'></span>
						<input
							type='text'
							className='form-control input-type1'
							placeholder='Email Address'></input>
					</div>

					<div className='form-group has-search input-style'>
						<div className='input-text-label'>Phone Number</div>
						<span className='fa fa-phone-square fa-fw form-control-feedback user-icon1'></span>
						<input
							type='text'
							className='form-control input-type1'
							placeholder='080xxxxxxxxx'></input>
					</div>
				</div>

				<button type='button' className='btn btn-lg btn-block btnstyle'>
					Block level button
				</button>
			</div>
		</div>
	);
}

// class Rpersonal extends React.Component{
//  documentData;

//   constructor(props) {
//     super(props);
//     this.state = {
//         orderColumns: URL_COLUMNS
//     };
//     console.info(this.state.orderColumns);
//   }
//   componentDidMount() {
//     document.title = "Personal account"
//   }

// render(){
//  const RegisterUser = e =>{
//   console.log(this.state.orderColumns[0].baseurl)
//  }

//   return (
//     <div className="App">

//     <div className='White-Box'>
//       <img src="../images/Logomark.png"  className='Logo-mark' alt="Finosell Logo"/>
//       <h3 className='text-personal-Acc-page'>Create your personal account</h3>
//       <p className='text-personalinfo'>Use your Personal Information</p>

//       <div className="input-pad">
//       <div className="input-text-label">Name</div>
//     <div className="form-group has-search input-style">
//     <span className="fa fa-user fa-fw form-control-feedback user-icon1"></span>
//     <input type="text" className="form-control input-type1" placeholder="Jumoke Adetola"></input>
//   </div>

//     <div className="form-group has-search input-style">
//       <div className="input-text-label">Email</div>
//     <span className="fa fa-envelope fa-fw form-control-feedback user-icon1"></span>
//     <input type="text" className="form-control input-type1" placeholder="Email Address"></input>
//   </div>

//     <div className="form-group has-search input-style">
//       <div className="input-text-label">Phone Number</div>
//     <span className="fa fa-phone-square fa-fw form-control-feedback user-icon1"></span>
//     <input type="text" className="form-control input-type1" placeholder="080xxxxxxxxx"></input>
//   </div>
//   </div>

//   <button type="button" className="btn btn-lg btn-block btnstyle">Block level button</button>
//     </div>

// </div>
// );
// }
// }

// export default Rpersonal;
