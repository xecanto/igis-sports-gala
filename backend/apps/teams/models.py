from django.db import models
from apps.users.models import CustomUser
from apps.games.models import Game

class Team(models.Model):
    name = models.CharField(max_length=100)
    captain = models.OneToOneField(CustomUser, on_delete=models.SET_NULL, null=True, related_name='captain_of')
    points = models.IntegerField(default=0)
    logo = models.ImageField(upload_to='team_logos/', blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class TeamMember(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='teams')
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='members')
    joined_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.email} - {self.team.name}"
