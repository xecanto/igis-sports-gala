from django.db import models
from apps.teams.models import Team
from apps.games.models import Game

class Match(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE, related_name='matches')
    team1 = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='matches_as_team1')
    team2 = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='matches_as_team2')
    location = models.CharField(max_length=100)
    scheduled_time = models.DateTimeField()
    result = models.CharField(max_length=100, blank=True)
    score_team1 = models.IntegerField(default=0)
    score_team2 = models.IntegerField(default=0)
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.team1.name} vs {self.team2.name} - {self.game.name}"
