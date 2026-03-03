import React, { useState } from "react";

export default function HowToPlay({ onClose }) {
	const [currentStep, setCurrentStep] = useState(0);

	const steps = [
		{
			title: "Welcome to VoteRange!",
			content: (
				<div>
					<p>
						This is a <strong>strategic voting game</strong> where you and other
						players vote on candidates, but here's the twist:
						<strong> everyone has different goals!</strong>
					</p>
					<div>
						<p><strong>The Goal:</strong></p>
						<p>
							Vote strategically to maximize your coins by getting your
							preferred candidate to win!
						</p>
					</div>
				</div>
			),
		},
		{
			title: "Step 1: You Start With Coins",
			content: (
				<div>
					<p>
						When you join an election, you receive <strong>200 coins</strong>
						(only once per election).
					</p>
					<div>
						<p><strong>What can you do with coins?</strong></p>
						<ul>
							<li><strong>Vote:</strong> Each vote costs 50 coins</li>
							<li><strong>Vote multiple times:</strong> You can vote as many times as you can afford</li>
							<li><strong>Vote for different candidates:</strong> Change your mind anytime</li>
						</ul>
					</div>
					<p>
						With 200 coins, you can vote up to 4 times (200 ÷ 50 = 4 votes)
					</p>
				</div>
			),
		},
		{
			title: "Step 2: Each Candidate is Worth Different Amounts to You",
			content: (
				<div>
					<p>
						Here's the game-changer:
						<strong> You have personalized payouts</strong> for each candidate.
					</p>
					<div>
						<p><strong>Example: Your Personal Payouts</strong></p>
						<div>
							<div>
								<span><strong>Candidate A wins:</strong></span>
								<span> +150 coins</span>
							</div>
							<div>
								<span><strong>Candidate B wins:</strong></span>
								<span> +60 coins</span>
							</div>
							<div>
								<span><strong>Candidate C wins:</strong></span>
								<span> -30 coins</span>
							</div>
						</div>
					</div>
					<div>
						<p><strong>The Twist:</strong></p>
						<p>
							<strong>Other players have DIFFERENT payouts!</strong> What's good
							for you might be bad for them.
						</p>
					</div>
					<p>
						Your payouts are private - other players can't see them unless you
						tell them
					</p>
				</div>
			),
		},
		{
			title: "Step 3: How to Win the Election",
			content: (
				<div>
					<p>
						The election ends when
						<strong> any candidate reaches the vote threshold</strong>.
					</p>
					<div>
						<p><strong>Election Progress:</strong></p>
						<div>
							<p>Candidate A - 7/10 votes</p>
							<p>Candidate B - 4/10 votes</p>
						</div>
					</div>
					<div>
						<p><strong>When Election Ends:</strong></p>
						<p>
							Everyone gets their payout based on who won.
						</p>
					</div>
				</div>
			),
		},
		{
			title: "Step 4: Strategy & Negotiation",
			content: (
				<div>
					<p>
						Use the <strong>chat</strong> to negotiate with other players!
					</p>
					<div>
						<p><strong>Strategic Options:</strong></p>
						<ul>
							<li><strong>Vote for your favorite</strong></li>
							<li><strong>Form coalitions</strong></li>
							<li><strong>Block bad outcomes</strong></li>
							<li><strong>Compromise</strong></li>
						</ul>
					</div>
					<div>
						<p><strong>Watch Out:</strong></p>
						<p>If you run out of coins (balance ≤ 0), you can't vote anymore.</p>
					</div>
				</div>
			),
		},
		{
			title: "Quick Example Game",
			content: (
				<div>
					<p><strong>4 Players, 3 Candidates - Who Will Win?</strong></p>
					<div>
						<p><strong>Alice's Payouts:</strong> A:+150 | B:+60 | C:-30</p>
						<p><strong>Bob's Payouts:</strong> A:-30 | B:+150 | C:+20</p>
						<p><strong>Carol's Payouts:</strong> A:+20 | B:-70 | C:+150</p>
						<p><strong>Dave's Payouts:</strong> A:+150 | B:+20 | C:+60</p>
					</div>
					<div>
						<p><strong>Possible Outcomes:</strong></p>
						<ul>
							<li><strong>A wins:</strong> Alice & Dave happy</li>
							<li><strong>B wins:</strong> Bob happy</li>
							<li><strong>C wins:</strong> Carol wins big</li>
						</ul>
					</div>
				</div>
			),
		},
		{
			title: "Ready to Play?",
			content: (
				<div>
					<p><strong>Quick Reference:</strong></p>
					<ul>
						<li>Check your payouts first</li>
						<li>Chat with other players</li>
						<li>Vote strategically</li>
					</ul>
					<div>
						<button onClick={onClose}>
							Got it! Let's Play!
						</button>
					</div>
				</div>
			),
		},
	];

	const nextStep = () => {
		if (currentStep < steps.length - 1) {
			setCurrentStep(currentStep + 1);
		}
	};

	const prevStep = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	const goToStep = (index) => {
		setCurrentStep(index);
	};

	return (
		<div>
			<div>
				<div>
					<h2>{steps[currentStep].title}</h2>
					<button onClick={onClose}>×</button>
				</div>

				<div>
					{steps.map((_, index) => (
						<button
							key={index}
							onClick={() => goToStep(index)}
						/>
					))}
				</div>

				<p>
					Step {currentStep + 1} of {steps.length}
				</p>

				<div>
					{steps[currentStep].content}
				</div>

				<div>
					<button
						onClick={prevStep}
						disabled={currentStep === 0}
					>
						← Previous
					</button>

					<button
						onClick={currentStep === steps.length - 1 ? onClose : nextStep}
					>
						{currentStep === steps.length - 1 ? "Start Playing!" : "Next →"}
					</button>
				</div>
			</div>
		</div>
	);
}