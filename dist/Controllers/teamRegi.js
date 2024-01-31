var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Team from "../Models/TeamRegistration";
export const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("", req.body)
    console.log(req.body);
    try {
        const newSession = new Team({
            teamName: req.body.teamName,
            university: req.body.university,
            other: req.body.other,
            leaderName: req.body.leaderName,
            leaderYear: req.body.leaderYear,
            leaderWhatsapp: req.body.leaderWhatsapp,
            leaderEmail: req.body.leaderEmail,
            leaderNIC: req.body.leaderNIC,
            member1Name: req.body.member1Name,
            member1Year: req.body.member1Year,
            member1Whatsapp: req.body.member1Whatsapp,
            member1Email: req.body.member1Email,
            member1NIC: req.body.member1NIC,
            member2Name: req.body.member2Name,
            member2Year: req.body.member2Year,
            member2Whatsapp: req.body.member2Whatsapp,
            member2Email: req.body.member2Email,
            member2NIC: req.body.member2NIC,
        });
        yield newSession.save();
        res.status(200).json({
            success: true,
            message: "Team Registered successfully",
            data: newSession,
        });
    }
    catch (err) {
        res.send(err);
        console.log(err);
    }
});
export const count = (req, res) => {
    Team.countDocuments({}).then(count => {
        console.log("Number of teams:", count);
        res.status(200).json({ teamCount: 50 - count });
    }).catch(err => {
        console.error('Error counting teams:', err);
        res.status(500).send('Error counting teams');
    });
};
//# sourceMappingURL=teamRegi.js.map